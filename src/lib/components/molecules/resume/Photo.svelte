<script lang="ts">
	import { getSrcsetFromImport } from '$lib/utils/functions';
	import AvatarDarkImport from '$lib/images/resume-avatar-dark.png?width=400&format=avif;webp;png&meta&imagetools';

	const avatarDark = getSrcsetFromImport(AvatarDarkImport);
</script>

<picture class="resume-photo">
	<source srcset={avatarDark.webp} type="image/webp"/>
	<source srcset={avatarDark.png} type="image/png" />
	<img height="200px" src={avatarDark.png} alt="Peter Knijff's Avatar" />
</picture>

<style lang="scss">
	.resume-photo {
		img {
			border-radius: 50%;
			max-width: 100%;
			max-height: 200px;
			box-sizing: border-box;
			@media (prefers-color-scheme: dark) {
				border: 3px solid var(--color--primary-shade);
			}
		}
	}
</style>
