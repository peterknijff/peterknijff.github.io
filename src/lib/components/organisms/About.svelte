<script>
	import Avatar from '$lib/components/atoms/Avatar.svelte';
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
</script>

<section id="about">
	<div class="info">
		<h2>
			<span style="display: none;">Mijn naam is Peter Knijff</span>
			De websites en apps die ik maak, werken fijn en
			<SparklingHighlight color="secondary">zien er goed uit.</SparklingHighlight>
		</h2>
		<p>
			Brengt de boodschap juist over — springt in het oog — is snel, gebruiksvriendelijk en
			beheerbaar.
		</p>
		<div class="socials">
			<span>Mijn socials:</span>
			<Socials />
		</div>
	</div>
	<div class="avatar">
		<div class="blob one" />
		<div class="blob two" />
		<div class="blob three" />
		<div class="image">
			<Avatar />
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.avatar {
			width: 250px;
			height: 250px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;

			.image {
				width: 80%;
				height: 80%;
				position: relative;
				border-radius: 50%;
				overflow: hidden;
			}

			.blob {
				position: absolute;
				animation: spin 2s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
				animation-fill-mode: forwards;
				animation-play-state: paused;
				background: rgba(var(--color--primary-shade-rgb), 0.2);

				&.one {
					height: 80%;
					width: 80%;
					border-radius: var(--radius-blob-1);
					animation-duration: 4s;
				}
				&.two {
					height: 90%;
					width: 90%;
					border-radius: var(--radius-blob-2);
					animation-duration: 2.5s;
				}
				&.three {
					height: 100%;
					width: 100%;
					border-radius: var(--radius-blob-3);
					animation-duration: 1.5s;
				}
			}

			&:hover {
				@media screen and (prefers-reduced-motion: no-preference) {
					.blob {
						animation-play-state: running;
					}
				}
			}
		}
	}
</style>
