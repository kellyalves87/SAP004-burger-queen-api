import database from "../models";

class Products_x_OrderService {
  static async findByOrderId(orderId) {
    try {
      return await database.ProductsOrder.findAll({ where: { orderId } });
    } catch (error) {
      throw error;
    }
  }
  static async add(orderId, newProductsOrder) {
    try {
      return await database.ProductsOrder.create({
        ...newProductsOrder,
        orderId,
      });
    } catch (error) {
      throw error;
    }
  }
}
export default Products_x_OrderService;
