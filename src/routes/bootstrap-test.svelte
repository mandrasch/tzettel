<div class="container py-5">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<h2>Bootstrap test</h2>

	<div class="row">
		<div class="col-12">
			<button type="button" class="btn btn-primary">Primary</button>
			<button type="button" class="btn btn-secondary">Secondary</button>
			<button type="button" class="btn btn-success">Success</button>
			<button type="button" class="btn btn-danger">Danger</button>
			<button type="button" class="btn btn-warning">Warning</button>
			<button type="button" class="btn btn-info">Info</button>
			<button type="button" class="btn btn-light">Light</button>
			<button type="button" class="btn btn-dark">Dark</button>

			<button type="button" class="btn btn-link">Link</button>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-8">col-sm-8</div>
		<div class="col-sm-4">col-sm-4</div>
	</div>
	<div class="row">
		<div class="col-sm">col-sm</div>
		<div class="col-sm">col-sm</div>
		<div class="col-sm">col-sm</div>
	</div>
</div>

<div class="container">
	<h2>General SASS Test</h2>
	<div class="box">
		<h3>Box title</h3>
	</div>

	<h2>Title outside of box</h2>

	<label>
		Title
		<input type="text" name="title" placeholder="Input a title" />
	</label>
</div>

<style lang="scss">
	.box {
		h3 {
			color: green;
		}
	}
	/* test autoprefixer */
	::placeholder {
		color: darkblue;
	}
	/* should be the following in scss output:
    ::-moz-placeholder {
    color: gray;
    }
    :-ms-input-placeholder {
    color: gray;
    }
    ::placeholder {
    color: gray;
    } 
    
    You need to include <input with placeholder property, otherwise this will be stripped.

    */
</style>
