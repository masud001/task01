import ApexCharts from 'apexcharts';
import './assets/style/main.scss';

// imports all images here
import logo from './assets/images/header-logo.svg';
import heroImage from './assets/images/hero-image.jpg';
import googleAddImg from './assets/images/google-adds.svg';
import facebookImg from './assets/images/facebook.svg';
import shopifyImg from './assets/images/shopify.svg';
import tiktokImg from './assets/images/tiktok-icon.svg';
import pinterestImg from './assets/images/pinterest-icon.svg';
import telegramImg from './assets/images/telegram-icon.svg';
import snapchatImg from './assets/images/snapchat-icon.svg';
import taboolaImg from './assets/images/taboola-icon.svg';
import outbrainImg from './assets/images/outbrain-icon.svg';
import iconImg01 from './assets/images/icon01.svg';
import iconImg02 from './assets/images/icon02.svg';
import iconImg03 from './assets/images/icon03.svg';
import accordionImg from './assets/images/accordion-img.jpg';
import firstGraphImg from './assets/images/graph01.svg';
import lastGraphImg from './assets/images/graph02.svg';
import footerLogoImg from './assets/images/footer-logo.svg';

const logoImg = document.getElementById('HeaderLogo');
const heroImg = document.getElementById('heroImage');

logoImg.src = logo;
heroImg.style.backgroundImage = `url(${heroImage})`;

// social icons section
const googleAddIcon = document.getElementById('googleAdds');
const facebookIcon = document.getElementById('facebook');
const shopifyIcon = document.getElementById('shopify');

const tiktokIcon = document.getElementById('tiktok');
const pinterestIcon = document.getElementById('pinterest');
const telegramIcon = document.getElementById('telegram');
const snapchatIcon = document.getElementById('snapchat');
const taboolaIcon = document.getElementById('taboola');
const outbrainIcon = document.getElementById('outbrain');
const iconImgIcon01 = document.getElementById('iconImg01');
const iconImgIcon02 = document.getElementById('iconImg02');
const iconImgIcon03 = document.getElementById('iconImg03');
const accondionsImage = document.getElementById('accondionsImg');
const firstGraphImage = document.getElementById('firstGraphIcon');
const lastGraphImage = document.getElementById('lastGraphIcon');

const googleAddsIdImage = document.getElementById('googleAddsId');
const facebookIdImage = document.getElementById('facebookId');
const shopifyIdImage = document.getElementById('shopifyId');

const footerLogoImage = document.getElementById('footerLogo');

googleAddIcon.src = googleAddImg;
facebookIcon.src = facebookImg;
shopifyIcon.src = shopifyImg;
tiktokIcon.src = tiktokImg;
pinterestIcon.src = pinterestImg;
telegramIcon.src = telegramImg;
snapchatIcon.src = snapchatImg;
taboolaIcon.src = taboolaImg;
outbrainIcon.src = outbrainImg;
iconImgIcon01.src = iconImg01;
iconImgIcon02.src = iconImg02;
iconImgIcon03.src = iconImg03;
accondionsImage.src = accordionImg;
firstGraphImage.src = firstGraphImg;
lastGraphImage.src = lastGraphImg;

googleAddsIdImage.src = googleAddImg;
facebookIdImage.src = facebookImg;
shopifyIdImage.src = shopifyImg;

footerLogoImage.src = footerLogoImg;

// header mobile menu show/hide toggle
const mobileMenuBar = document.getElementById('mobileMenuBar');
const mobileMenu = document.getElementById('mobileMenu');
// Set up click event listener
mobileMenuBar.addEventListener('click', () => {
	// Toggle the visibility of header navigation
	mobileMenu.classList.toggle('show');
});

// Close the navigation if clicked outside
document.addEventListener('click', (event) => {
	if (!mobileMenuBar.contains(event.target) && !mobileMenu.contains(event.target)) {
		mobileMenu.classList.remove('show');
	}
});

// apex chart

var options = {
	series: [
		{
			name: 'Data',
			data: [0, 15, 50, 30, 60, 40, 80, 100, 80],
		},
		{
			name: 'Data',
			data: [0, 30, 70, 51, 90, 62, 120, 130, 148],
		},
	],
	chart: {
		toolbar: {
			show: false,
		},
		height: 350,
		type: 'line',
		zoom: {
			enabled: false,
		},
	},
	colors: ['#FFC907', '#58BF73'],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'straight',
	},
	title: {
		text: 'Revenue from Facebook Ads',
		align: 'left',
	},
	grid: {
		row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
	},
};

var chart = new ApexCharts(document.getElementById('chartId'), options);
chart.render();
