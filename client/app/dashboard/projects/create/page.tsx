import CreateProjectDialog from "@/components/projects/create-project-dialog";

export default function CreateProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create Project
        </h1>

        <p className="text-muted-foreground mt-1">
          Add a new portfolio project
        </p>
      </div>

      <CreateProjectDialog />
    </div>
  );
}