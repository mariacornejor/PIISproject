function Input(props: Props) {
  const isBlocked = props.blocked !== undefined ? props.blocked : false;
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.titulo}
      </label>
      <input
        type="text"
        id="first_name"
        className="h-8 w-68 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-background dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.titulo}
        defaultValue={props.valorPredefinido} // Aquí establecemos el valor predefinido
        readOnly={isBlocked}
        required
      />
    </div>
  );
}
type Props = {
  titulo: string;
  valorPredefinido: string;
  blocked?: boolean;
};

export default Input;
