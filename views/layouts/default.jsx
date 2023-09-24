const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>Imago Vocis</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body>
      <div className="wrapper">
        <header className='banner'>
          <h1><a href="/movies" className='black'>Imago Vocis</a></h1>
        </header>
   
        <nav className=" navbar-expand-lg navbar-light">
  <div className=" navy">
        <a className="nav-linkJ active" aria-current="page" href="/movies">Home</a>
        <a className="nav-linkJ" href="/reviews/new">Create Review</a>
        <a className="nav-linkJ" href="/reviews">Reviews</a>
        <a className="nav-linkJ" href="/movies/favorites">Personal Favorites</a>
</div>
</nav>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>

    </html>
  )
}

module.exports = Default

