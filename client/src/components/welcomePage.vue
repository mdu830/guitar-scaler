<template>
    <div>
        <h1>Welcome to Guitar-Scaler.</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
    name: 'welcomePage',
      props: {
        msg: String
    }
}
</script>

<style>
    h1, h2 {
        color: whitesmoke;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        margin-top: 250px;
    }
</style>