import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export function Home() {
    const { user, loggedIn, handleLogin, logout, token } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            console.log(username, password);
            let response = await axios.post("http://localhost:8000/api/token/", {
                username,
                password
            });
            if (response.status === 200) {
                // For SimpleJWT, use 'access' as the token
                let accessToken = response.data.access;
                handleLogin(username, accessToken);
                alert("Login successful");
            }
        } catch (err) {
            alert(err.response?.data?.detail || "Login failed");
        }
    };

    const handleLogout = () => {
        logout();
        alert("Logged out");
    };

    return (
        <>
            <h1>Home Page</h1>
            <h1>{user}</h1>
            <h1>{loggedIn.toString()}</h1>

            {!loggedIn && (
                <>
                    <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br></br>
                    <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
                    <button onClick={login}>Login</button>
                </>
            )}
            {loggedIn && (
                <>
                    <button onClick={handleLogout}>Logout</button>
                    <h2>Welcome, {user}</h2>
                    <Products />
                </>
            )}
        </>
    );
}

function Products() {
    const [products, setProducts] = useState([]);
    const { token } = useContext(AuthContext);

    const getProducts = async () => {
        try {
            let response = await axios.get("http://localhost:8000/api/products/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setProducts(response.data);
            } else {
                alert("Failed to fetch products");
                console.log(response);
            }
        } catch (err) {
            alert("Failed to fetch products");
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </>
    );
}