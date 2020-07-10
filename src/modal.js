(() => {
	const refs = {
	  openModalBtn: document.querySelector("[data-modal-open]"),
	  closeModalBtn: document.querySelector("[data-modal-close]"),
	  openAboutBtn: document.querySelector("[data-about-open]"),
	  openPriceBtn: document.querySelector("[data-price-open]"),
	  modal: document.querySelector("[data-modal]"),
	};
	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.openAboutBtn.addEventListener("click", toggleModal);
	refs.openPriceBtn.addEventListener("click", toggleModal);
	function toggleModal() {
	  refs.modal.classList.toggle("is-hidden");
	}
  })();