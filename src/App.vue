<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
 export default {
     name: 'app'
 }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700');

html, html * {
    box-sizing: border-box;
}
html, body, #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

h2, h3, h4, h5, p {
    font-size: 1em;
    line-height: 20px;
}

h1, h2, h3, h4, h5, p, body {
    margin: 0;
    padding: 0;
}

ul {
    padding: 0;
}

li {
    list-style-type: none;
}

a:link {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
}

a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
}

#app {
    font-family: 'Inconsolata', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    color: #070707;
    background: #fefefe;
}

@media (max-width: 768px) {
    html, body, #app {
        height: initial;
        overflow: initial;
    }
}
</style>
