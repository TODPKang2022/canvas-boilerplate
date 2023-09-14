export default class App {
    static canvas = document.querySelector('canvas')
    static ctx = App.canvas.getContext('2d')
    static dpr = devicePixelRatio > 1 ? 2 : 1
    static interval = 1000 / 60
    static width = 1024
    static height = 768


    constructor() {
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        App.canvas.width = App.width * App.dpr
        App.canvas.height = App.height * App.dpr
        
        //폰 dpr 에 따라 바뀌지 않게
        App.ctx.scale(App.dpr, App.dpr)
        
        // 반응형으로 만들어 주기 위함
        const width = innerWidth > innerHeight ? innerHeight * 0.9 : innerWidth * 0.9
        App.canvas.style.width = width + 'px'
        // 4:3 비율 유지
        App.canvas.style.height = width * (3/4) + 'px'
    }

    render() {
        // 주사율 다른 모니터 차이 없게
        let now, delta
        let then = Date.now()

        const frame = () => {
            requestAnimationFrame(frame)
      
            now = Date.now()
            delta = now - then
            if (delta < App.interval) return

            then = now - (delta % App.interval)
        }

        requestAnimationFrame(frame)

    }

}   