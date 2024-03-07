import TodosContainer from '@/components/todos/TodosContainer';
import Container from '@/components/ui/Container';


const Todo = () => {
    return (
        <Container>
            <h2 className='text-center font-bold text-4xl my-10'>My Todos</h2>
            <TodosContainer />
        </Container>
    );
};

export default Todo;