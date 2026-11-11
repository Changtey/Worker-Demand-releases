'use strict'
const REPOSITORY='Changtey/Worker-Demand-releases'
const CLOUD='https://lsjnyedpttpnajyaguhr.supabase.co'
const PUBLIC_KEY='sb_publishable_SrGFnzYcIT2mK3e9A5jNMg_kTMSomsa'
const NOTICE_KEY='iG8eZ2568bGDNaD6ZLkcXAD5A1J3VNzhKEOo7Bir7tI='
const element=id=>document.getElementById(id)
const bytes=value=>Uint8Array.from(atob(value),character=>character.charCodeAt(0))

// The page already holds working download links, so phones whose browser cannot
// check the download list (older Android WebView inside Facebook) still get the app.
// A checked list only swaps in newer links; anything unchecked leaves the page as it is.
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
    // Check every address first, so a bad list never changes some links and not others.
    const checked=[]
    for(const [id,app,platform,suffix] of [['windows',desktop,'windows_x64','.exe'],['linux-deb',desktop,'linux_deb_x64','.deb'],['linux-appimage',desktop,'linux_appimage_x64','.AppImage'],['android',android,'universal','.apk']]){
      const item=app.packages?.[platform]
      if(!item)continue
      const url=new URL(item.url)
      if(url.protocol!=='https:' || url.hostname!=='github.com' || url.username || url.password || url.port || url.search || url.hash || !url.pathname.startsWith(`/${REPOSITORY}/releases/download/`) || !url.pathname.endsWith(suffix))throw Error('Unknown download address')
      checked.push([id,url.href])
    }
    if(!checked.length)throw Error('No app download')
    for(const [id,href] of checked)element(id).href=href
    element('version').textContent=`Version ${desktop.version}`
    element('android-version').textContent=`Version ${android.version}`
  }catch{
    // Keep the download links that came with the page.
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

function prepareSendToComputer(){
  const button=element('copy-page-link'),result=element('copy-page-result')
  if(!button || !result)return
  const link='https://changtey.github.io/Worker-Demand-releases/#computer-downloads'
  button.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(link);result.textContent='Page link copied. Paste it in a message to yourself, then open it on your computer.'}
    catch{result.textContent=`Copy this link and open it on your computer: ${link}`}
  })
}
prepareSendToComputer()

function prepareVideos(){
  const panels=Array.from(document.querySelectorAll('[data-tutorial-panel]'))
  const choices=Array.from(document.querySelectorAll('[data-tutorial-language]'))
  const videos=[...panels.map(panel=>panel.querySelector('video')),element('promo-video')].filter(Boolean)
  // Only one video plays at a time.
  for(const video of videos)video.addEventListener('play',()=>{for(const other of videos)if(other!==video)other.pause()})
  for(const panel of panels)prepareLessons(panel)
  // Hindi shows first. The choice only changes which tutorial is shown.
  function showLanguage(language){
    for(const panel of panels){
      const shown=panel.dataset.tutorialPanel===language
      if(!shown)panel.querySelector('video')?.pause()
      panel.hidden=!shown
    }
    for(const choice of choices)choice.setAttribute('aria-pressed',String(choice.dataset.tutorialLanguage===language))
  }
  for(const choice of choices)choice.addEventListener('click',()=>showLanguage(choice.dataset.tutorialLanguage))
}

function prepareLessons(panel){
  const tutorial=panel.querySelector('video'),status=panel.querySelector('.lesson-status')
  if(!tutorial || !status)return
  const buttons=Array.from(panel.querySelectorAll('[data-lesson-time]'))
  const stepOf=button=>`step ${button.dataset.lessonStep}: ${button.dataset.lessonTitle.replace(/[.!?।]+$/,'')}`
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
    status.textContent=`Playing ${stepOf(lesson)}.`
    markLesson()
    try{await tutorial.play()}
    catch{status.textContent=`Ready at ${stepOf(lesson)}. Press Play to begin.`}
  }
  for(const button of buttons)button.addEventListener('click',()=>{
    selected=button
    status.textContent=`Opening ${stepOf(button)}…`
    tutorial.scrollIntoView({block:'center',behavior:'auto'})
    if(tutorial.readyState>=1)startLesson()
    else tutorial.load()
  })
  tutorial.addEventListener('loadedmetadata',()=>{if(selected)startLesson()})
  tutorial.addEventListener('timeupdate',markLesson)
  // A failed video file is reported on its source, not on the video.
  for(const item of [tutorial,...tutorial.querySelectorAll('source')])item.addEventListener('error',()=>{
    selected=null;status.textContent='This video could not play here. Use the Open or download link above.'
  })
}
prepareVideos()
