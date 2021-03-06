import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render() { 
    return(
        <Html>
            <Head>
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Qahiri&display=swap" rel="stylesheet"/>
            <title>ProdutosCode</title>
            <link rel="shortcut icon" href="Logocode.jpeg" type="image/jpeg" />
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    );
}
}