document.write(`
<style>

*{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
}

.header-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: gray;
    color: white;
}
.navbar-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: black;
    color: white;
}
.navbar-container span{
    margin-left: 50px;
}
.navbar-container a{
    text-decoration: none;
    color: white;
}
.navbar-container a:hover{
    color: blue;
}
</style>


<div class="header-container">
    <header class="header-box">
        <span class="Payall-title">
            <h1>PayAll</h1>
        </span>
    </header>
    </div>
    <div class="navbar-container">
    <div class="navbar-box">
        <span><a href="./src/pages/nova-conta.html" target="_blank">Novo</a></span>
        <span><a href="../../index.html">Histórico</a></span>
        <span><a href="">Configurações</a></span>
    </div>
</div>`);
