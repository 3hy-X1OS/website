const tps = 1;
window.addEventListener('DOMContentLoaded', addCustomKeyframe);

function addCustomKeyframe() {
    const elements = document.querySelectorAll('[data-animation]');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationName = element.getAttribute('data-animation');

                // Show the element by removing the 'hidden' class
                element.classList.remove('hidden');
                // Add the custom-animation class to the element
                element.classList.add('custom-animation');
                // Add the animation-name class to the element
                element.classList.add(animationName);
                // Disconnect the observer for the element once animation is triggered
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        // Hide the element initially by adding the 'hidden' class
        element.classList.add('hidden');
        observer.observe(element);
    });
}

const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    visibility: hidden;
  }

  .custom-animation {
    opacity: 0;
  }
  .custom-animation.from-top {
    animation-name: fromTop;
    animation-duration: ${tps}s;
    animation-fill-mode: forwards;
  }
  .custom-animation.from-left {
    animation-name: fromLeft;
    animation-duration: ${tps}s;
    animation-fill-mode: forwards;
  }

  .custom-animation.from-right {
    animation-name: fromRight;
    animation-duration: ${tps}s;
    animation-fill-mode: forwards;
  }

  .custom-animation.from-bottom {
    animation-name: fromBottom;
    animation-duration: ${tps}s;
    animation-fill-mode: forwards;
  }

  .custom-animation.opacity {
    animation-name: opacity;
    animation-delay: ${tps * 1.5 - tps}s;
    animation-duration: ${tps * 2}s;
    animation-fill-mode: forwards;
  }

  @keyframes fromLeft {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fromRight {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fromBottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fromTop {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

document.head.appendChild(style);
