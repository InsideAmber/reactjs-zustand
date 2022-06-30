import create from "zustand";

const url = "https://jsonplaceholder.typicode.com/users";

const useStore = create((set) => ({
  dataHouse: [],
  fetchUsers: async () => {
    const res = await fetch(url);
    set({ dataHouse: await res.json() });
  },
}));
export default useStore;
