'use strict'
const REPOSITORY='Changtey/Worker-Demand-releases'
const CLOUD='https://lsjnyedpttpnajyaguhr.supabase.co'
const PUBLIC_KEY='sb_publishable_SrGFnzYcIT2mK3e9A5jNMg_kTMSomsa'
const NOTICE_KEY='iG8eZ2568bGDNaD6ZLkcXAD5A1J3VNzhKEOo7Bir7tI='
const element=id=>document.getElementById(id)
const bytes=value=>Uint8Array.from(atob(value),character=>character.charCodeAt(0))

async function readDownloads(){
  try{
    const response=await fetch(`https://raw.githubusercontent.com/${REPOSITORY}/main/updates.json`,{cache:'no-store',signal:AbortSignal.timeout(15000)})
    if(!response.ok)throw Error('Download list unavailable')
    const envelope=await response.json()
    if(envelope.format!==1 || envelope.key_id!=='worker-demand-v1' || typeof envelope.payload!=='string' || envelope.payload.length>200000)throw Error('Unknown download list')
    const key=await crypto.subtle.importKey('raw',bytes(NOTICE_KEY),{name:'Ed25519'},false,['verify'])
    const payload=bytes(envelope.payload)
    if(!await crypto.subtle.verify('Ed25519',key,bytes(envelope.signature),payload))throw Error('Download list could not be checked')
    const notice=JSON.parse(new TextDecoder().decode(payload)),desktop=notice.apps?.desktop
    if(notice.repository!==REPOSITORY || desktop?.application_id!=='in.changtey.vbgramg.deo')throw Error('Wrong download list')
    let count=0
    for(const [id,platform,suffix] of [['windows','windows_x64','.exe'],['linux-deb','linux_deb_x64','.deb'],['linux-appimage','linux_appimage_x64','.AppImage']]){
      const item=desktop.packages?.[platform]
      if(!item)continue
      const url=new URL(item.url)
      if(url.protocol!=='https:' || url.hostname!=='github.com' || url.username || url.password || url.port || url.search || url.hash || !url.pathname.startsWith(`/${REPOSITORY}/releases/download/`) || !url.pathname.endsWith(suffix))throw Error('Unknown download address')
      element(id).href=url.href;element(id).hidden=false;count++
    }
    if(!count)throw Error('No desktop download')
    element('version').textContent=`Version ${desktop.version}`
    element('download-status').textContent='Choose the installer for your computer.'
  }catch{
    for(const id of ['windows','linux-deb','linux-appimage'])element(id).hidden=true
    element('download-status').textContent='The download list could not be checked. Open All downloads & release notes below to choose your installer.'
  }
}

async function readInvitation(){
  const supplied=new URL(location.href).searchParams.get('ref')
  if(supplied===null)return
  const code=supplied.trim().toUpperCase()
  element('invitation').hidden=false
  if(!/^[A-Z0-9][A-Z0-9-]{2,14}[A-Z0-9]$/.test(code)){
    element('invitation-check').textContent='This referral code is not valid. Ask the DEO who invited you to share their code again.'
    element('copy-code').disabled=true
    return
  }
  element('referral-code').value=code
  element('copy-code').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(code);element('copy-result').textContent='Referral code copied. Keep it for registration in the desktop app.'}
    catch{element('referral-code').select();element('copy-result').textContent='Select the code and copy it. Keep it for registration in the desktop app.'}
  })
  try{
    const response=await fetch(`${CLOUD}/rest/v1/rpc/wd_referral_invitation`,{method:'POST',headers:{apikey:PUBLIC_KEY,'Content-Type':'application/json'},body:JSON.stringify({p_code:code}),signal:AbortSignal.timeout(15000)})
    if(!response.ok)throw Error('Invitation check unavailable')
    const invitation=await response.json()
    if(invitation.valid!==true){element('invitation-check').textContent='This referral code is not available. Check the code with the DEO who invited you.';return}
    element('invitation-check').textContent='Use this code when you first register in the desktop app.'
    element('invitation-benefit').hidden=false;element('reward-terms').hidden=false
  }catch{element('invitation-check').textContent='We could not check this referral code. Keep the code and check it with the DEO who invited you.'}
}
readDownloads()
readInvitation()
