<script>
	import { base } from '$app/paths';
</script>

<header>
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container-fluid">
				<a class="navbar-brand" href={`${base}/`}>tzettel</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<!-- <li class="nav-item">
							<a class="nav-link active" aria-current="page" href={`${base}/`}>Home</a>
						</li>
					 	<li class="nav-item">
							<a class="nav-link" href={`${base}/about`}>Bootstrap-Test</a>
						</li> -->
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>

<style lang="scss">
	header,
	.navbar {
		background-color: #fad7a0; // TODO: put in var
	}
</style>
