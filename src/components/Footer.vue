<template>
	<div id="footer">
		<div class="logo">
			<LogoSvg />Palindrome Checker
		</div>
		<div class="social">
			<a href="#">
				<LinkedinSvg />
			</a>
			<a href="#">
				<GithubSvg />
			</a>
			<a href="#">
				<TwitterSvg />
			</a>
			<a href="#">
				<YoutubeSvg />
			</a>
		</div>
	</div>
</template>

<script>
import LogoSvg from '../assets/Logo.svg';
import LinkedinSvg from '../assets/linkedin-in.svg';
import GithubSvg from '../assets/github-alt.svg';
import TwitterSvg from '../assets/twitter.svg';
import YoutubeSvg from '../assets/youtube.svg';

export default {
	name: 'Footer',
	components: {
		LogoSvg,
		LinkedinSvg,
		GithubSvg,
		TwitterSvg,
		YoutubeSvg,
	},
};
</script>

<style lang="scss">
#footer {
	display: flex;
	justify-content: space-between;
	align-content: center;

	> .logo {
		font-family: 'Roboto';
		font-size: 22px;
		text-transform: uppercase;
		color: #fff;

		svg {
			width: 120px;
			height: 80px;
		}
	}

	> .social {
		display: flex;
		justify-content: space-between;
		align-items: center;

		> a {
			width: 38px;
			height: 38px;

			svg {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>