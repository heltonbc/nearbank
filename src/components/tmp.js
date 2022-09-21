

ReactDOM.render(&lt;FooterLinks /&gt;, document.getElementById('root'));</code>
<code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.




HELP!
No código abaixo eu criei uma lista de links para o footer.
Até aí tudo bem pois quando eu tenho um link do tipo "http://" ele vai funcionar, mas eu não estou conseguindo 

import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FooterLinks.scss";

const links = [
    {
        label: "Sobre nós",
        url: "/Home",
    },
    {
        label: "FAQ",
        url: "#Faq",
    },
];

function FooterLinks() {
return (
<h3>Footer Links</h3>
<ul>
{links.map(link => (
<li key={link.label}>
<a href={link.url}>{link.label}</a>
</li>
))}
</ul>
);
}

export default FooterLinks;

const links = [
{label: "Home", url: "#home",}, {label: "Home", url: "#home",}, {label: "Home", url: "#home",}, 
];

atualize a função abaixo de acordo com o array acima.

function FooterLinks() {
return (
<ul>
{links.map(link => (
<li key={link.label}>
<a href={link.url}>{link.label}</a>
</li>
))}
</ul>
);
}
export default FooterLinks;



function FooterLinks() {
    return (
        <ul>
            {links.map(link => (
                <li key={link.label}>
                    <a href={link.url}>{link.label}</a>
                </li>
            ))}
        </ul>
    );
}
export default FooterLinks;


[
"#local"
]

tenho o seguinte código abaixo e gostaria de adicionar nele um link que me direcione para uma seção dentro da própria página.
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FooterLinks.scss";

const links = [
{
label: "Sobre nós",
url: "/Home",
},
{
label: "FAQ",
url: "#Faq",
},
];

function FooterLinks() {
return (
<ul>
{links.map(link => (
<li key={link.label}>
<a href={link.url}>{link.label}</a>
</li>
))}
</ul>
);
}

export default FooterLinks;

Código da seção:
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FooterLinks.scss";

const links = [
{
label: "Sobre nós",
url: "#Home",
},
{
label: "FAQ",
url: "#Faq",
},
];

function FooterLinks() {
return (
<h3>Footer Links</h3>
<ul>
{links.map(link => (
<li key={link.label}>
<a href={link.url}>{link.label}</a>
</li>
))}
</ul>
);
}

export default FooterLinks;

A estrutura da página pode ser vista em anexo. Eu gostaria que o link "Sobre nós" aparecesse no rodapé e direcionasse para a seção "Home".

Desde já agradeço. Obrigado!


A:

Você precisa utilizar o prop <code>href</code> da tag <code>&lt;a&gt;</code> da seguinte forma:
<code>const links = [
{
    label: "Sobre nós",
    url: "#Home",
},
{
    label: "FAQ",
    url: "#Faq",
}];

function FooterLinks() {
    return (
        &lt;h3&gt;Footer Links&lt;/h3&gt;
        &lt;ul&gt;
            {links.map(link =&gt; (
                &lt;li key={link.label}&gt;
                    &lt;a href={'#' + link.url}&gt;{link.label}&lt;/a&gt;
                &lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}
</code>
O que o prop <code>href</code> da tag <code>&lt;a&gt;</code> faz é basically um redirecionamento para o local que você especificar, por isso o uso do sinal de <code>#</code> antes da <code>url</code>.
Exemplo:
<code>&lt;a href="#home"&gt;Home&lt;/a&gt;
</code>
Desse jeito, quando clicar no link <code>Home</code> ele irá redirecionar para a tag com o <code>id</code> igual a <code>home</code>. A seguir um exemplo de como ficaria a tag com o <code>id</code> <code>home</code>:
<code>&lt;div id="home"&gt;
    &lt;h1&gt;Home&lt;/h1&gt;
&lt;/div&gt;
</code>
Observação: para fazer o redirecionamento para uma seção dentro da própria página é necessário que a tag que você queira ser redirecionada tenha um <code>id</code> como mostrado acima.
Exemplo do código completo:


<code>const links = [
{
    label: "Sobre nós",
    url: "#home",
},
{
    label: "FAQ",
    url: "#faq",
}];

function FooterLinks() {
    return (
        &lt;h3&gt;Footer Links&lt;/h3&gt;
        &lt;ul&gt;
            {links.map(link =&gt; (
                &lt;li key={link.label}&gt;
                    &lt;a href={'#' + link.url}&gt;{link.label}&lt;/a&gt;
                &lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}




/* {
        label: "Contato",
        url: "/Footer",
    },
    {
        label: "Imprensa",
        url: "/Index",
    },
    {
        label: "Investidores",
        url: "/Index",
    }, */</code>

    <div>
                    <Row>
                        <Link to="/">Home</Link>
                        <Link to="/Footer">Footer</Link>
                        <Link to="/dashboard">dashboard</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/faq">Faq</Link>
                        <Link to="/creditcard">CreditCard</Link>
                        <Link to="/cardlist">CardList</Link>
                    </Row>
                </div>