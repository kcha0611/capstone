class Api::ProjectsController < ApplicationController
  def create
    project = Project.create(project_params)
    render :show
  end

  def show
  end

  def index
    projects = Project.all
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy!
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
