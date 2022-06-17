<Route path="/login" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route
                    path="/"
                    element={<Home handleClick={() => setShowModal(true)} />}
                />



                <Routes>
                    <Route path="/dashboard/history">
                        <h2>Extratos</h2>
                    </Route>
                    <Route path="/dashboard/payments">
                        <h2>Pagamentos</h2>
                    </Route>
                    <Route path="/dashboard">
                        <AccountBalance data={data} />
                    </Route>
                </Routes>




{links.map(({ text, path, exact }, key) => (
    <Link
        className="dashboard__link"
        to={path}
        exact={exact ? exact : false}
        key={key}
    >
        <div className="d-grid gap-2">
            <Button
                className={`dashboard__button text-start ${
                    key === activeLink
                        ? "dashboard__button--active"
                        : ""
                }`}
                variant="link"
                size="lg"
                onClick={() => setActiveLink(key)}
            >
                {text}
            </Button>
        </div>
    </Link>
))}






------------------------------------------------------------------------------

