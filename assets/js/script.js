document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const openModal = ($el) => {
    $el.classList.add('is-active');
  };

  const closeModal = ($el) => {
    $el.classList.remove('is-active');
  };

  const closeAllModals = () => {
    document.querySelectorAll('.modal').forEach(($modal) => {
      closeModal($modal);
    });
  };

  // Add click event on buttons to open specific modal
  document.querySelectorAll('.js-modal-trigger').forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add click event on various child elements to close the parent modal
  const closeElements = document.querySelectorAll(
    '.modal-background, .modal-close, .delete, .modal-close-button'
  );

  closeElements.forEach(($close) => {
    const $target = $close.closest('.modal');
    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  // Handle form submission
  document.getElementById('eventForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Add your form submission logic here
    
    // Close the modal after submission
    closeAllModals();
  });
});