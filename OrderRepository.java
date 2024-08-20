import org.hibernate.Session;
import org.hibernate.SessionFactory;

import java.util.List;

public class OrderRepository {
    private SessionFactory sessionFactory;

    public OrderRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void save(Order order) {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        session.save(order);
        session.getTransaction().commit();
        session.close();
    }

    public List<Order> findAll() {
        Session session = sessionFactory.openSession();
        List<Order> orders = session.createQuery("from Order", Order.class).list();
        session.close();
        return orders;
    }

    // Add other CRUD methods here
}