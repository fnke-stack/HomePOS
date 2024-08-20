import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;

public class ProductRepository {
    private SessionFactory sessionFactory;

    public ProductRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Product> findAll() {
        Session session = sessionFactory.openSession();
        List<Product> products = session.createQuery("from Product", Product.class).list();
        session.close();
        return products;
    }

    // Add other CRUD methods here
}