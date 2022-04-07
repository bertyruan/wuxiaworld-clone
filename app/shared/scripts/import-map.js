function setupImportMap() {
    const importMap = {
        "imports": {
            "scripts/": "/app/shared/scripts/"
        }
    }
    const script = document.createElement('script');
    script.type = "importmap";
    script.textContent = JSON.stringify(importMap);
    document.currentScript.after(script);
}

setupImportMap();