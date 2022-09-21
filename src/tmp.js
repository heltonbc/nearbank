{/* <Row xs={12} lg={12}>
                {/* Engloba a primeira e a segunda coluna */}
                <Col xs={12} lg={4}>
                    <Row className="align-items-center mb-5">
                        {/* Coluna do avatar */}
                        <Col xs={12} lg={6}>
                            <span className="dashboard__user-avatar">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    color="#f8f9fa"
                                />
                                <FontAwesomeIcon
                                    className="dashboard__user-icon"
                                    icon={faUser}
                                    size="3x"
                                    color="#7c7d7d"
                                />
                            </span>
                        </Col>
                        {/* Coluna do nome */}
                        <Col xs={9}>
                            <h4>{name}</h4>
                            <p className="text-muted">{account}</p>
                        </Col>
                    </Row>
                    {/* Coluna do Menu */}
                    {links.map(({ text, path }, key) => (
                        <Link className="dashboard__link" to={path} key={key}>
                            <Button
                                className={`dashboard__button text-left ${
                                    key === activeLink ? "dashboard__button--active" : ""
                                }`}
                                variant="link"
                                size="lg"
                                block="true"
                                onClick={() => setActiveLink(key)}
                            >
                                {text}
                            </Button>
                        </Link>
                    ))}
                </Col> */}