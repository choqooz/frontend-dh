import { Link } from "react-router-dom";
import PersonalCard from "./PersonalCard";
import { Button } from "@mui/material";

export function Home({ products, users, carts }) {
  return (
    <>
      <div className="flex items-center justify-center gap-5 pt-5 pb-5">
        <PersonalCard
          title="Productos"
          count={products.count}
          description="El total de productos son:"
        />
        <PersonalCard
          title="Usuarios"
          count={users.count}
          description="El total de usuarios son:"
        />
        <PersonalCard
          title="Carritos"
          count={carts.count}
          description="El total de carritos son:"
        />
      </div>
      <div className="flex items-center justify-center gap-5 pt-5 pb-5">
        <PersonalCard
          title="Ultimo Producto"
          description={`El ultimo producto creado es: ${products.lastProduct?.name}`}
        />
      </div>
      <div className="flex items-center justify-center gap-5 ">
        <PersonalCard
          title="Total por categorias"
          description={
            <>
              <p>
                Total de categoría ficción:{" "}
                {products.countByCategory?.countFiccion}
              </p>
              <p>
                Total de categoría no ficción:{" "}
                {products.countByCategory?.countNoFiccion}
              </p>
              <p>
                Total de categoría material escolar:{" "}
                {products.countByCategory?.countMaterialEscolar}
              </p>
            </>
          }
          count={`Total de las categorias: ${
            products.countByCategory?.countFiccion +
            products.countByCategory?.countNoFiccion +
            products.countByCategory?.countMaterialEscolar
          }`}
        />
      </div>
      <Link to="/products">
        <div className="flex justify-center p-5">
          <Button variant="contained" color="primary">
            Ver Productos
          </Button>
        </div>
      </Link>
    </>
  );
}
