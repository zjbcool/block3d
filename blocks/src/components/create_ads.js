// 没有使用
export function createAds(root) {
  const getKeyUrl = 'https://shop.zjbku.com/product/block3d-license-key/'

  const adsChildHtml = /*html*/`
  <a class="support-card" href=${getKeyUrl} target="_blank">
    <div class="support-title">
      <svg t="1652591063211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15760" width="40" height="40"><path d="M512 512m-490.75 0a490.75 490.75 0 1 0 981.5 0 490.75 490.75 0 1 0-981.5 0Z" fill="#FFFFFF" p-id="15761"></path><path d="M512 1024c-69.11 0-136.16-13.54-199.3-40.24-60.97-25.79-115.72-62.7-162.74-109.72-47.01-47.02-83.93-101.77-109.72-162.74C13.54 648.16 0 581.11 0 512s13.54-136.16 40.24-199.3c25.79-60.97 62.7-115.72 109.72-162.74 47.01-47.01 101.77-83.93 162.74-109.72C375.84 13.54 442.89 0 512 0s136.16 13.54 199.3 40.24c60.97 25.79 115.72 62.7 162.74 109.72 47.01 47.01 83.93 101.77 109.72 162.74 26.7 63.14 40.24 130.19 40.24 199.3s-13.54 136.16-40.24 199.3c-25.79 60.97-62.7 115.72-109.72 162.74-47.01 47.01-101.77 83.93-162.74 109.72-63.14 26.7-130.19 40.24-199.3 40.24z m0-981.5C253.12 42.5 42.5 253.12 42.5 512S253.12 981.5 512 981.5 981.5 770.88 981.5 512 770.88 42.5 512 42.5z" fill="#EB803F" p-id="15762"></path><path d="M512 96.66C283.39 96.66 98.07 282.61 98.07 512S283.39 927.34 512 927.34c228.6 0 413.93-185.95 413.93-415.34S740.61 96.66 512 96.66z" fill="#EB803F" p-id="15763"></path><path d="M750.85 621.19c-4.29-60.03-17.15-111.49-30.02-111.49-47.17-4.29-85.76 12.86-120.07 42.88-55.74-51.46-90.05-51.46-167.23-12.86-4.29-51.46-12.86-102.91-17.15-150.08 0-21.44 0-47.17 12.87-60.03 17.15-17.15 38.59 8.57 55.74 17.15 25.73 17.15 85.76-8.58 90.05-34.3 4.29-34.3-38.59-90.05-72.9-85.76-42.88 4.29-85.76 17.15-124.35 30.02-8.57 0-17.15 8.58-17.15 17.15-21.44 60.03-47.17 120.06-64.32 180.1-12.86 60.03-21.44 124.35-25.73 188.67 0 12.86 8.57 30.02 17.15 38.59 107.2 68.61 222.97 81.47 338.75 25.73 30.02-17.15 42.88-8.57 64.32 8.58 8.57 8.58 25.73 17.15 34.3 25.73 4.29 4.29 17.15-4.29 17.15-8.58 12.87-0.02 12.87-51.47 8.59-111.5z m0 0" fill="#FFFFFF" p-id="15764"></path></svg>
      <h1 class="ml-10">支持Block3D<h1>
    </div>
    <h3>去广告1年</h3>
    <h1 class="text-orange">￥599</h1>
  </a>
    
  <a class="support-card" href=${getKeyUrl} target="_blank">
    <div class="support-title">
      <svg t="1652591063211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15760" width="40" height="40"><path d="M512 512m-490.75 0a490.75 490.75 0 1 0 981.5 0 490.75 490.75 0 1 0-981.5 0Z" fill="#FFFFFF" p-id="15761"></path><path d="M512 1024c-69.11 0-136.16-13.54-199.3-40.24-60.97-25.79-115.72-62.7-162.74-109.72-47.01-47.02-83.93-101.77-109.72-162.74C13.54 648.16 0 581.11 0 512s13.54-136.16 40.24-199.3c25.79-60.97 62.7-115.72 109.72-162.74 47.01-47.01 101.77-83.93 162.74-109.72C375.84 13.54 442.89 0 512 0s136.16 13.54 199.3 40.24c60.97 25.79 115.72 62.7 162.74 109.72 47.01 47.01 83.93 101.77 109.72 162.74 26.7 63.14 40.24 130.19 40.24 199.3s-13.54 136.16-40.24 199.3c-25.79 60.97-62.7 115.72-109.72 162.74-47.01 47.01-101.77 83.93-162.74 109.72-63.14 26.7-130.19 40.24-199.3 40.24z m0-981.5C253.12 42.5 42.5 253.12 42.5 512S253.12 981.5 512 981.5 981.5 770.88 981.5 512 770.88 42.5 512 42.5z" fill="#EB803F" p-id="15762"></path><path d="M512 96.66C283.39 96.66 98.07 282.61 98.07 512S283.39 927.34 512 927.34c228.6 0 413.93-185.95 413.93-415.34S740.61 96.66 512 96.66z" fill="#EB803F" p-id="15763"></path><path d="M750.85 621.19c-4.29-60.03-17.15-111.49-30.02-111.49-47.17-4.29-85.76 12.86-120.07 42.88-55.74-51.46-90.05-51.46-167.23-12.86-4.29-51.46-12.86-102.91-17.15-150.08 0-21.44 0-47.17 12.87-60.03 17.15-17.15 38.59 8.57 55.74 17.15 25.73 17.15 85.76-8.58 90.05-34.3 4.29-34.3-38.59-90.05-72.9-85.76-42.88 4.29-85.76 17.15-124.35 30.02-8.57 0-17.15 8.58-17.15 17.15-21.44 60.03-47.17 120.06-64.32 180.1-12.86 60.03-21.44 124.35-25.73 188.67 0 12.86 8.57 30.02 17.15 38.59 107.2 68.61 222.97 81.47 338.75 25.73 30.02-17.15 42.88-8.57 64.32 8.58 8.57 8.58 25.73 17.15 34.3 25.73 4.29 4.29 17.15-4.29 17.15-8.58 12.87-0.02 12.87-51.47 8.59-111.5z m0 0" fill="#FFFFFF" p-id="15764"></path></svg>
      <h1 class="ml-10">支持Block3D<h1>
    </div>
    <h3>去广告3个月</h3>
    <h1 class="text-orange">￥199</h1>
  </a>

  <a class="support-card" href=${getKeyUrl} target="_blank">
    <div class="support-title">
      <svg t="1652591063211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15760" width="40" height="40"><path d="M512 512m-490.75 0a490.75 490.75 0 1 0 981.5 0 490.75 490.75 0 1 0-981.5 0Z" fill="#FFFFFF" p-id="15761"></path><path d="M512 1024c-69.11 0-136.16-13.54-199.3-40.24-60.97-25.79-115.72-62.7-162.74-109.72-47.01-47.02-83.93-101.77-109.72-162.74C13.54 648.16 0 581.11 0 512s13.54-136.16 40.24-199.3c25.79-60.97 62.7-115.72 109.72-162.74 47.01-47.01 101.77-83.93 162.74-109.72C375.84 13.54 442.89 0 512 0s136.16 13.54 199.3 40.24c60.97 25.79 115.72 62.7 162.74 109.72 47.01 47.01 83.93 101.77 109.72 162.74 26.7 63.14 40.24 130.19 40.24 199.3s-13.54 136.16-40.24 199.3c-25.79 60.97-62.7 115.72-109.72 162.74-47.01 47.01-101.77 83.93-162.74 109.72-63.14 26.7-130.19 40.24-199.3 40.24z m0-981.5C253.12 42.5 42.5 253.12 42.5 512S253.12 981.5 512 981.5 981.5 770.88 981.5 512 770.88 42.5 512 42.5z" fill="#EB803F" p-id="15762"></path><path d="M512 96.66C283.39 96.66 98.07 282.61 98.07 512S283.39 927.34 512 927.34c228.6 0 413.93-185.95 413.93-415.34S740.61 96.66 512 96.66z" fill="#EB803F" p-id="15763"></path><path d="M750.85 621.19c-4.29-60.03-17.15-111.49-30.02-111.49-47.17-4.29-85.76 12.86-120.07 42.88-55.74-51.46-90.05-51.46-167.23-12.86-4.29-51.46-12.86-102.91-17.15-150.08 0-21.44 0-47.17 12.87-60.03 17.15-17.15 38.59 8.57 55.74 17.15 25.73 17.15 85.76-8.58 90.05-34.3 4.29-34.3-38.59-90.05-72.9-85.76-42.88 4.29-85.76 17.15-124.35 30.02-8.57 0-17.15 8.58-17.15 17.15-21.44 60.03-47.17 120.06-64.32 180.1-12.86 60.03-21.44 124.35-25.73 188.67 0 12.86 8.57 30.02 17.15 38.59 107.2 68.61 222.97 81.47 338.75 25.73 30.02-17.15 42.88-8.57 64.32 8.58 8.57 8.58 25.73 17.15 34.3 25.73 4.29 4.29 17.15-4.29 17.15-8.58 12.87-0.02 12.87-51.47 8.59-111.5z m0 0" fill="#FFFFFF" p-id="15764"></path></svg>
      <h1 class="ml-10">支持Block3D<h1>
    </div>
    <h3>去广告1个月</h3>
    <h1 class="text-orange">￥99</h1>
  </a>
`
  let adsContainer = null
  let observer = null

  adsContainer = create()

  observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      console.log(mutation.type);
      if (mutation.type === 'childList' || mutation.type === 'attributes') create()
    }
  })

  // observer.observe(adsContainer, { attributes: true, childList: true, subtree: true });

  function create() {
    if (adsContainer) root.removeChild(adsContainer)

    adsContainer = document.createElement('div')
    adsContainer.className = 'support-container'
    adsContainer.innerHTML = adsChildHtml
    root.appendChild(adsContainer)
    // observer && observer.disconnect()
    // observer && observer.observe(adsContainer, { attributes: true, childList: true, subtree: true })
    return adsContainer
  }
}