import * as THREE from 'three'


export const handleClick = (scene, camera, mouse,sceneFile, onTitleChanged) => {
    const raycaster = new THREE.Raycaster();
    let INTERSECTED;

    const canvas = document.getElementById(`canvas-${sceneFile}`); // Asegúrate de que estás apuntando al canvas correcto

    window.addEventListener('click', (event) => {
        // Calcula las coordenadas del ratón en relación con el canvas, no con la ventana
        const rect = canvas.getBoundingClientRect();
        
        // Mapeo del ratón en coordenadas normalizadas (NDC)
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Actualiza el raycaster con la posición actual del ratón
        raycaster.setFromCamera(mouse, camera);

        // Obtiene los objetos intersectados en la escena
        const intersects = raycaster.intersectObjects(scene.children, true); // 'true' para comprobar toda la jerarquía

        if (intersects.length > 0) {
            console.log(intersects[0].object.name);  // Muestra el nombre del objeto intersectado

            if (INTERSECTED !== intersects[0].object) {
                // Si ya había un objeto intersectado antes, restaura su material
                if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

                INTERSECTED = intersects[0].object;
                INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();  // Guarda el color actual
                INTERSECTED.material.emissive.setHex(0x000FFF);  // Cambia el color
                
                // Cambiar el título usando la función pasada como prop
                onTitleChanged(INTERSECTED.name);
                
            }
        } else {
            // Si no hay intersecciones, restaurar el color del objeto previamente intersectado
            if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
            INTERSECTED = null;
            onTitleChanged("");
        }
    });
};