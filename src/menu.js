;(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]")
	const mobileMenuRef = document.querySelector("[data-menu]")

	menuBtnRef.addEventListener("click", () => {
		menuBtnRef.classList.toggle("is-open")

		mobileMenuRef.classList.toggle("is-open")
	})
})()(() => {
	const refs = {
		closeMenulBtn: document.querySelector("[data-menu-close]"),
		modal: document.querySelector("[data-modal]"),
	}
	refs.closeMenuBtn.addEventListener("click", toggleModal)
	function toggleModal() {
		refs.modal.classList.toggle("is-hidden")
	}
})()
