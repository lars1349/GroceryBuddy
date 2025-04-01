

function saveModel() {
    localStorage.setItem('model', JSON.stringify(model));
}

function loadModel() {
    const saved = localStorage.getItem('model');
    if (saved) {
        Object.assign(model, JSON.parse(saved));
    }
}

