;(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]")
	const mobileMenuRef = document.querySelector("[data-menu]")
	const menuBtnClose = document.querySelector("[data-menu-close]")

	menuBtnRef.addEventListener("click", () => {
		menuBtnRef.classList.toggle("is-open")

		mobileMenuRef.classList.toggle("is-open")
	})
	menuBtnClose.addEventListener("click", () => {
		menuBtnRef.classList.toggle("is-open")

		mobileMenuRef.classList.toggle("is-open")
	})
})()
