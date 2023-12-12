import React, { useState } from 'react';
import { ChakraProvider, Container, Text, Input, Button, Checkbox, Stack, Box, Select } from '@chakra-ui/react';
import './App.css';

function App() {
  const [lists, setLists] = useState([{ name: 'Default List', tasks: [] }]);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newLists = [...lists];
      newLists[currentListIndex].tasks.push({ text: taskInput, completed: false });
      setLists(newLists);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const newLists = [...lists];
    newLists[currentListIndex].tasks.splice(index, 1);
    setLists(newLists);
  };

  const toggleTask = (index) => {
    const newLists = [...lists];
    newLists[currentListIndex].tasks[index].completed = !newLists[currentListIndex].tasks[index].completed;
    setLists(newLists);
  };

  const addList = () => {
    const newListName = prompt('Enter the name for the new list:');
    if (newListName) {
      setLists([...lists, { name: newListName, tasks: [] }]);
      setCurrentListIndex(lists.length); // Switch to the newly created list
    }
  };

  const deleteList = () => {
  const numberOfLists = lists.length;

  if (numberOfLists === 1) {
    // Display an error message or throw an error when attempting to delete the only list
    alert("Cannot delete the only list.");
  } else {
    const confirmed = window.confirm(`Are you sure you want to delete the list "${lists[currentListIndex].name}"?`);
    
    if (confirmed) {
      const newLists = [...lists];
      newLists.splice(currentListIndex, 1);
      setLists(newLists);
      setCurrentListIndex(0); // Switch to the default list or adjust as needed
    }
  }
};

  const switchList = (index) => {
    setCurrentListIndex(index);
  };

  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          To-Do Lists
        </Text>
        <Stack direction="row" spacing={2} mb="4">
          <Select value={currentListIndex} onChange={(e) => switchList(parseInt(e.target.value, 10))}>
            {lists.map((list, index) => (
              <option key={index} value={index}>
                {list.name}
              </option>
            ))}
          </Select>
          <Button size="sm" ml="2"colorScheme="red"  onClick={deleteList}>
            Delete
          </Button>
        </Stack>
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          mb="4"
        />
        <Button colorScheme="teal" size="md" mb="4" onClick={addTask}>
          Add Task
        </Button>
        <Stack spacing={3}>
          {lists[currentListIndex].tasks.map((task, index) => (
            <Box
              key={index}
              p="4"
              borderWidth="1px"
              borderRadius="md"
              shadow="sm"
              textDecoration={task.completed ? 'line-through' : 'none'}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTask(index)}
                colorScheme="teal"
              >
                {task.text}
              </Checkbox>
              <Button size="sm" ml="2" colorScheme="red" onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </Box>
          ))}
        </Stack>
        <Button colorScheme="blue" size="md" mt="4" onClick={addList}>
          Add List
        </Button>
      </Container>
    </ChakraProvider>
  );
}

export default App;
