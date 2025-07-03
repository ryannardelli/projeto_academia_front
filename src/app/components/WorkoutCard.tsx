import { Pencil, Plus } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  level: string;
  editable?: boolean;
  onAdd?: () => void;
  onEdit?: () => void;
}

export function WorkoutCard({ title, level, editable, onAdd, onEdit }: WorkoutCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Nível: {level}</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        {!editable && onAdd && (
          <button onClick={onAdd} className="bg-blue-600 text-white px-3 py-1 rounded-xl text-sm hover:bg-blue-700 flex items-center gap-1">
            <Plus size={16} /> Adicionar
          </button>
        )}

        {editable && onEdit && (
          <button onClick={onEdit} className="bg-green-600 text-white px-3 py-1 rounded-xl text-sm hover:bg-green-700 flex items-center gap-1">
            <Pencil size={16} /> Editar
          </button>
        )}
      </div>
    </div>
  );
}
