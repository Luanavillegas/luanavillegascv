document.addEventListener('DOMContentLoaded', function() {
    console.log('Script cargado correctamente');
    
    window.openModal = function(modalId) {
        console.log('Intentando abrir modal:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        } else {
            alert('Error: Modal no encontrado. Verifica los IDs.');
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    };

    window.showSubModal = function(subModalId) {
        console.log('Intentando mostrar sub-modal:', subModalId);
        const subModals = document.querySelectorAll('.sub-modal');
        subModals.forEach(subModal => subModal.style.display = 'none');
        const selectedSubModal = document.getElementById(subModalId);
        if (selectedSubModal) {
            selectedSubModal.style.display = 'block';
        } else {
            alert('Error: Sub-modal no encontrado. Verifica los IDs.');
        }
    };

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.background = 'linear-gradient(135deg, #9575CD 0%, #673AB7 100%)';
        });
        button.addEventListener('mouseout', () => {
            button.style.background = 'linear-gradient(135deg, #673AB7 0%, #9575CD 100%)';
        });
    });
});
