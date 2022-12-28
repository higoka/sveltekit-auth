<script>
  export let form
</script>

{#if form?.incorrect}
  <p style="color:red">username or password incorrect</p>
{/if}

<p>Login using <strong>same</strong> directory</p>
<form action="?/login" method="post">
  <button>Login</button>
</form>

<hr>

<p>Login using <strong>"/auth"</strong> directory</p>
<form action="/auth?/login" method="post">
  <button>Login</button>
</form>
