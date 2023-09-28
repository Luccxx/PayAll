function formatURL(url) {
    return url.startsWith('/') ? url : '/' + url;
}

const ArrayUrls = {
    Historico: formatURL('index.html'),
    Novo: formatURL('src/pages/nova-conta.html')
}

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
    height: 5rem;
    background: linear-gradient(to right, RoyalBlue, blue);
    color: white;
    
}
.navbar-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 4rem;
    box-shadow: 10px 10px 20px DarkGray;
    background: linear-gradient(to right, RoyalBlue, blue);
    color: white;
    
    margin-bottom: 1rem;
}
.navbar-container span{
    margin-left: 30px;
}

.navbar-container a{
    text-decoration: none;
    font-size: 18px;
    color: white;
}
.navbar-container a:hover{
    color: lightgray;
}
.logo-image img {
    transition: transform 1s;
}

.logo-image img:hover {
    transform: scale(1.2);
}

</style>


<!--<div class="header-container">
    <header class="header-box">
        <span class="Payall-title">
            <h1>PayAll</h1>
        </span>
    </header>
    </div>-->
    <div class="navbar-container">
    <div class="navbar-box">
        <span class="logo-image"><a href=""><img src="../../public/assets/dinheiro.png" style="width: 50px;height="50px;""></img></a></span>
        <span><a href="${ArrayUrls.Novo}" id="ahref">Novo</a></span>
        <span><a href="${ArrayUrls.Historico}">Histórico</a></span>
        <span><a href="">Configurações</a></span>
    </div>
</div>`);
