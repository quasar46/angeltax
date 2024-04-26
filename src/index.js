import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Accordion from 'accordion-js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'accordion-js/dist/accordion.min.css';
import './scss/styles.scss';
// import StickyHeader from "@oveleon/sticky-header";
import './fonts/stylesheet.scss';


document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.ceyses__slider', {
		modules: [Navigation],
		slidesPerView: 1,
		navigation: {
			nextEl: ".ceyses__wrap .swiper-button-next",
			prevEl: ".ceyses__wrap .swiper-button-prev",
		}
	})

	const swiper2 = new Swiper('.team__slider', {
		modules: [Navigation],
		slidesPerView: 3,
		spaceBetween: 0,
		navigation: {
			nextEl: ".team__wrap .swiper-button-next",
			prevEl: ".team__wrap .swiper-button-prev",
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			0: {
				slidesPerView: "auto",
				spaceBetween: 0,
			}
		}
	})

	if (window.innerWidth < 768) {
		const swiper3 = new Swiper('.optimization__slider', {
			modules: [Autoplay],
			slidesPerView: "auto",
			autoplay: {
				delay: 2000,
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
				}
			}
		})
	}

	function quiz() {
		let answers = []
		const form = document.querySelector('.quiz__wrap')
		const steps = form.querySelectorAll('.quiz__item')
		const btnSubmit = form.querySelector('[type="submit"]')
		steps.forEach((step, i) => {
			const btnNext = step.querySelector('.next')
			const list = step.querySelector('.quiz__list')

			if (i > 0) {
				step.classList.add('hidden')
			}
			list.querySelectorAll('input').forEach(input => {
				input.addEventListener('change', function () {
					btnNext.removeAttribute('disabled')
				})
			})
			if (btnNext) {
				if (step.nextElementSibling) {
					btnNext.addEventListener('click', function (e) {
						e.preventDefault()
						if (list.querySelectorAll('input:checked').length > 0) {
							step.nextElementSibling.classList.remove('hidden')
							step.classList.add('hidden')

						}
					})
				}
			}
			btnNext.addEventListener('click', function (e) {
				answers.push(list.querySelector('input:checked').value)
			})
		})
		form.addEventListener('submit', function (e) {
			// e.preventDefault()
			console.log(answers)
		})
	}
	quiz()

	function openMenu() {
		const btn = document.querySelector('.burger')
		const menu = document.querySelector('.header__block')
		const body = document.querySelector('body')
		btn.addEventListener('click', function () {
			this.classList.toggle('active')
			menu.classList.toggle('show')
			body.classList.toggle('hidden')
		})
	}
	openMenu()
})
