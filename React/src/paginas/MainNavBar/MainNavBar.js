import { NavLink, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

function MainNavBar(props) {

    const handleLogin = () => {
        if(props.func.nome){
            return <p>funcionario: {props.func.nome}</p>
        }
    }
    return (
        <div>
            <Navbar
                color="light"
                expand="lg"
                light
            >
                <NavbarBrand href="/">
                    <h1 style={{ color: 'black', padding: "15px" }}>BREJA & CIA</h1>
                </NavbarBrand>
                <Nav>
                <NavItem> {handleLogin()}  </NavItem>
                    <NavItem>
                        <NavLink href="/CrudProdutos/">
                            Cadastar Produto
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/CrudVenda/">
                            Cadastar Venda
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/CrudFuncionario/">
                            Cadastar Funcionario
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/CrudCliente/">
                            Cadastar Cliente
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ListAlltables/">
                            Tabelas
                        </NavLink>
                    </NavItem>
                    
                </Nav>
            </Navbar>
        </div>
    )
}
export default MainNavBar;