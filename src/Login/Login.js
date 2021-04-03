import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="App">
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Coeus News Portal</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="dashboard.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="form-signin">
                <form>
                    <h2 className="h3 mb-3 fw-normal" >Please Login</h2>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email address" />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="w-100 btn btn-lg btn-primary" type="submit" >Login</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Login;
