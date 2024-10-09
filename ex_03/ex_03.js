window.onload = function() {
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
        trigger: 'click',
        interactive: true,
        onClickOutside(instance) {
            instance.hide();
        }
    });
};
