// Navigation logic to switch between screens
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
}

// Hub toggle buttons
document.getElementById('open-hub-btn').addEventListener('click', () => {
    switchView('hub-view');
});

document.getElementById('back-to-chat-btn').addEventListener('click', () => {
    switchView('chat-view');
});

// Attach back-to-hub or back-to-chat links
document.querySelectorAll('.back-to-hub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchView('hub-view');
    });
});

// Interactive "View Original Message" action:
// Switches back to chat view, scrolls to the exact message, and pulses a temporary highlight effect.
function jumpToMessage(msgId) {
    switchView('chat-view');
    
    const targetMsg = document.getElementById(msgId);
    if (targetMsg) {
        targetMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add pulse highlight animation
        targetMsg.classList.add('highlighted-pulse');
        setTimeout(() => {
            targetMsg.classList.remove('highlighted-pulse');
        }, 2000);
    }
}