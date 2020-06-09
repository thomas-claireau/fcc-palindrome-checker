<template>
	<footer id="footer">
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
	</footer>
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
	align-items: center;
	margin-bottom: 20px;

	@media screen and (max-width: $break-tablet) {
		flex-direction: column;
	}

	> .logo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-family: 'Roboto';
		font-size: 18px;
		text-transform: uppercase;
		color: #fff;

		svg {
			width: 50px;
			height: auto;
			margin-right: 20px;
		}
	}

	> .social {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: $break-tablet) {
			margin-top: 20px;
		}

		> a {
			&:not(:first-child) {
				margin-left: 50px;
			}

			svg {
				min-width: 28px;
				width: 28px;
				height: 28px;

				@media screen and (max-width: $break-tablet) {
					min-width: 24px;
					width: 24px;
					height: 24px;
				}
			}
		}
	}
}
</style>