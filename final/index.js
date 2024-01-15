const tl = gsap.timeline({
  defaults: {
    opacity: 0,
    duration: .8,
    ease: 'back', // bounce 느낌
  }
});

/**
 * FOUC 페이지 로딩 전 아이템들이 노출되는 현상(느린 인터넷에 주로 나타남)
 * 감싸는 section에 from autoAlpha: 0 추가
 * window에 DOMContentLoaded(브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생(img, 스타일시트 기다리지 않음)) 추가
 */

function init(){
  tl.from('.stage', {autoAlpha: 0}) // FOUC
  .from('.stage h1', {x: -50, duration: .3})
  .from('.stage h2', {x: 50, duration: .3})
  .from('.stage p', {y: 50})
  .from('.stage button', {y: 50})
  .from('.planet > img', {scale: 0, stagger: .1})
}

window.addEventListener('DOMContentLoaded', () => { init(); })