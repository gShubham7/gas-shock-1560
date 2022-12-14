import React from 'react';
import style from "./analytics.module.css"

export const Analytics = () => {
  return (
    <div className={style.Analytics}>
        <div className={style.sidebar}>
          <div className={style.home}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///9/f3+Hh4d6enqVlZWKiop3d3fPz8/W1tb7+/uqqqq7u7v39/eNjY2Tk5OZmZm3t7fJycnLDrkuAAADD0lEQVR4nO3bi3KbMBCF4WBcUtLWJO//so0LeMzNCLHS7qr/eYHoG85qlcnk7Y0QQgghhBBC/Oaj1T5B2rRdc/utfYiUabu6qosmXuuq+iYWW9T2H/Cb+KdQ4r2ifUot6gNYalGfgPeiah9HPO0EeCcWVtQ5sLxZvM6Bpc3i4gsWtjSWFS2tqBvAcogrM1jU0mhfAIuYxa0ZLKeoO0D/S2MX6HwW9yo6Et0WNQzoeRZf3qJTos9ZDAY6XRqhFfVb1ENAj8QDFR2IvpbG66faFtHRLB6bwQfRUVGjgJ6WRiTQTVHjKjp+RQdFPQP0QYy4RadE40WNWRMzou1ZPFfR8StaLqoA0HZRRYCGH3ASFR2JJosqB7Q6i4JAm7MoCjS4NCQrOhBtFVUeaI14+iWzSrSzNM4/1baIRmYxRUUHopGiJgNaWRoJgSZmMV1FR6JyUVMD9Wcx0S06JWrOYgag6tJIX9GBqFbUTEA9YpaKDkSNpZHqqbZFzD6LuWbwQcxe1MzA/EsjOzBzUXNXdCDmK6oOMCcx6y06JWYpat41MSPmmEWtig7EDEVVBeYoqjIw+QNOt6IjMWFRLQDTzqIJYMpZNAJMtjRsVLRPkqJaAqYhKr5k1iK+NDSfausRnkVbFe0jW1SDQNmlYRIoOIsWK9pH6AFnFyg1i+Zu0edIzKJpoMDSsFzRPmeLah54lmi8on1OLA17T7X1RM+i/RkcE1tUN8DYpeEIGFVUPxXtc7io3oDHiU5u0eccm0WHwEOz6K+ifcKL6hQYXlS3wMAHnNeK9gn4rd83MGAW21tTL6J96hdZHrbZ+Yrvn7+WuWg7NnNZOe3nV8AsznLVhmzmx3EMQmNBiBChfhAiRKgfhAgR6gchQoT6QYgQoX4QIkS4m+VfFTbiVdh9hKbzKWzeg3/CzwYhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESL8r4Rx/w+RXlhLCbtLVKoDwiruR9yEhIQQQgghhBBCCCGEEEIIIUnzF/Pba5glanCnAAAAAElFTkSuQmCC" /> Home</div>
          <div>
            <div className={style.channel}> Channels</div>
             
            <div> <img src="data:image/png;base64,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" /> Instagram</div>
            <div> <img src="data:image/png;base64,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" /> Twitter</div>
            <div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEWEgoT////5+fl/fX/Ew8R6d3qxsLGvsK+CgIKKiorV1dWTk5OdnZ3q6urv8O99e32lpqV0cnS3uLfc3dyjo6PJycns7OyNjY2JhonFxcW+vb7a29qYmJirq6uztbPk5eSSkJLJx8laGCF0AAAE0klEQVR4nO3d7XriIBAF4BC0orHB+lmjNu793+Taj91urWEGGh9msuf8ro+8m0DIAG5hmtGQ05iifLJDzlNZlONiyBlDqD4Q6g+E+gOh/kCoPxDqD4T6A6H+QKg/EOoPhPoDof5AqD8Q6g+E+gOh/kCoP6lC56y1zvXenv6TJLT++XiaLCeL+fTCvEezekyC0Bcvq9K8p2z3Ry/bGC20080f3kdWR3uv1vWRWKFdXvlesy8EX8Y4oStm332XtFO5xCihK9qbQGNqucS4a9gFlEyMEdrbt+jHeDMAoZ0EgMYshY6oEcJpHRSa6X1bmhq+0O7DQDPzd25rWiKu4Y0H4dfI7IlsoV1QQPMisieyhf5AClcib1P+XUqMM5eUd25rWrhCV5FAY44SeyJbSHdDY9aahfaBIZxIHGrYwiVD+KBaeBq60K0ZwpNqIWcsnWseaVjPw92dG5uUPuc0te45DWOo2UjshhF3qSPfLUROaWLeDxsCKHPiHVWn2YaFQmtRMXWacE8cQJ0mXMeYCQXG1UvtqrsTSgXGVvW7SsIruaus/axbzGQOMm+JX3u6AWzE3qJFyvphdd0Z20oyMGEN2Plq8zkLL2fzseBbtEhbx3feHhfL0Wi0PB2d8DXu5L0Yb1sxrPxtCgX20wwhEOoPhPoDof7IE17mEv5vephUyBI666frh/3s0D5e0q5mm+Z1YvgjpSShHZ9H2+81y7Ldn8fpyCjhNJjoT1z53Km7mFdvqtQpfkytjVgkjf3E45c/LRpiYeQwT7uOMoTOT+iFH7OqUmrO9xUGd8J9Cu2ue9PjlywTLqMEIWsF/T0JFZP8Qvcc2tR5nXIdS8wutDtiOeQ6k8jOmFG4ffuTY5zPRO+HyCisX/9iTa5Kfk/cVcwrTAIaE9UXswptlQQ0ZRXx0MgqpPZVd+bx+3fJFHYv1lHZ8LtiTuEmGWjMnN0VMwp/lJbdE7UK+Ts91QrZg41aIXsjpF4h96CVXiH3sa9XyN2ipFjY8tqtWFjyDsspFpoFqyNqFu5ZHVGQsH5sL7lR9O4Kb0OrEGG9OVWF82Nvi+d5w6wtblkdUYSwfZj+s/rirFvw3qvOnI4oQdi46w5lyS3Xb2Gd78gv3N4s8nrOWTlW1S27sN7dbqZnHJYbaRDW565WeroEwNp5nVu46G4kfcBDgzB0zIY+pXOQP9KU4TMaVLGR9YqYV/grOCshf8VBgXAXbCJ55rHlNDurkBopxsRtKl9IVQQt8cBg1dtyCslKC3X4eCtdSNetbfgbxV9D+szpOPzQr5+FC+limQ+/KYoX0lVr4ni1eCH9QyE+vBGFVW3LKaRfYInHhXghffabeNWXLizDc7b/RPiiXEh/JSHk/BBHTiE91lPTvgEIw6/50oWM5/XwhcQvjEkXMu5S5cIeriFnKT/z/lIIIYRQvjBcihqCcA4hhBDeVcio50IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ6hEGP8E400MITc9CN58FE/uJPeMrq0PwK3veBV18/J8WHbn1zxn8BOt3O6K/8kdCnYFQfyDUHwj1B0L9gVB/INQfCPUHQv2BUH8g1B8I9QdC/YFQfyDUHwj1B0L9gVB/XoVPwcVy7XkqC9OMhpzG/AbTl3UEFvuK/wAAAABJRU5ErkJggg==" /> LinkedIn</div>
            <div> <img src="data:image/jpeg;base64,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" /> Shopify</div>
            
          </div>
        
        </div>
        <div className={style.leftbar}>
        
        </div>
    </div>
  )
}
