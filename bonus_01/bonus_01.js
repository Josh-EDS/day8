window.onload = function() {
    const elements = document.querySelectorAll('.element');
    let currentIndex = 0;

    const tooltips = tippy('.element', {
        content: (reference) => {
            if (reference.tagName === 'IMG') return 'Look at this cool image!';
            if (reference.tagName === 'DIV') return 'This square is no ordinary square!';
            if (reference.tagName === 'AUDIO') return 'Let the music play!';
            if (reference.tagName === 'BUTTON') return 'Press me to unlock magic!';
            if (reference.tagName === 'VIDEO') return 'Watch and enjoy the show!';
        },
        animation: 'shift-toward',
        theme: 'custom',
        trigger: 'manual',
        interactive: true,
        appendTo: () => document.body,
        onShow(instance) {
            const content = instance.popper.querySelector('.tippy-content');
            content.innerHTML += '<br><br><span class="next-tip">Click to continue</span>';
            const nextTip = content.querySelector('.next-tip');
            nextTip.addEventListener('click', (e) => {
                e.stopPropagation();
                showNextTooltip();
            });
        },
        onHide(instance) {
            const content = instance.popper.querySelector('.tippy-content');
            if (content) {
                const nextTip = content.querySelector('.next-tip');
                if (nextTip) {
                    nextTip.removeEventListener('click', showNextTooltip);
                }
            }
        }
    });

    function showNextTooltip() {
        if (currentIndex > 0) {
            tooltips[currentIndex - 1].hide();
        }
        if (currentIndex < elements.length) {
            tooltips[currentIndex].show();
            currentIndex++;
        } else {
            alert('Tour completed! :)');
            if (confirm('Restart the tour ?') == true) {
                window.location.href = "";
              } else {
                alert("Ok, Enjoy!")
              }
        }
    }

    showNextTooltip();

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.tippy-box')) {
            tooltips.forEach(tooltip => tooltip.hide());
        }
    });
};