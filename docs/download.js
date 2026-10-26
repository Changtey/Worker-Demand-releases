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
    const notice=JSON.parse(new TextDecoder().decode(payload)),desktop=notice.apps?.desktop,android=notice.apps?.android
    if(notice.repository!==REPOSITORY || desktop?.application_id!=='in.changtey.vbgramg.deo' || android?.application_id!=='in.changtey.worker_demand')throw Error('Wrong download list')
    let count=0
    for(const [id,app,platform,suffix] of [['windows',desktop,'windows_x64','.exe'],['linux-deb',desktop,'linux_deb_x64','.deb'],['linux-appimage',desktop,'linux_appimage_x64','.AppImage'],['android',android,'universal','.apk']]){
      const item=app.packages?.[platform]
      if(!item)continue
      const url=new URL(item.url)
      if(url.protocol!=='https:' || url.hostname!=='github.com' || url.username || url.password || url.port || url.search || url.hash || !url.pathname.startsWith(`/${REPOSITORY}/releases/download/`) || !url.pathname.endsWith(suffix))throw Error('Unknown download address')
      element(id).href=url.href;element(id).hidden=false;count++
    }
    if(!count)throw Error('No app download')
    element('version').textContent=`Version ${desktop.version}`
    element('android-version').textContent=`Version ${android.version}`
    element('android-status').textContent=element('android').hidden?'The Android file is not available. Open All downloads & release notes below.':'Choose Download for Android to get the phone app.'
    element('download-status').textContent='Choose the installer for your computer.'
  }catch{
    for(const id of ['windows','linux-deb','linux-appimage','android'])element(id).hidden=true
    element('android-status').textContent='The Android download could not be checked. Open All downloads & release notes below.'
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

function prepareVideos(){
  const tutorial=element('tutorial-video'),promo=element('promo-video'),status=element('lesson-status')
  if(!tutorial || !promo || !status)return
  const buttons=Array.from(document.querySelectorAll('[data-lesson-time]'))
  let selected=null
  function markLesson(){
    let current=null
    for(const button of buttons){
      if(Number(button.dataset.lessonTime)<=tutorial.currentTime+.2)current=button
      button.removeAttribute('aria-current')
    }
    if(current)current.setAttribute('aria-current','step')
  }
  async function startLesson(){
    if(!selected)return
    const lesson=selected;selected=null
    tutorial.currentTime=Number(lesson.dataset.lessonTime)
    status.textContent=`Lesson selected: ${lesson.dataset.lessonTitle}.`
    markLesson()
    try{await tutorial.play()}
    catch{status.textContent=`Lesson selected: ${lesson.dataset.lessonTitle}. Press Play to begin.`}
  }
  for(const button of buttons)button.addEventListener('click',()=>{
    selected=button
    status.textContent=`Opening lesson: ${button.dataset.lessonTitle}…`
    tutorial.scrollIntoView({block:'center',behavior:'auto'})
    if(tutorial.readyState>=1)startLesson()
    else tutorial.load()
  })
  tutorial.addEventListener('loadedmetadata',()=>{if(selected)startLesson()})
  tutorial.addEventListener('timeupdate',markLesson)
  tutorial.addEventListener('play',()=>promo.pause())
  promo.addEventListener('play',()=>tutorial.pause())
  for(const video of [tutorial,promo])video.addEventListener('error',()=>{
    if(video===tutorial){selected=null;status.textContent='The tutorial could not play here. Use Open or download the tutorial above.'}
  })
}
prepareVideos()
