class Api::ProjectsController < ApplicationController\
  before_action :require_logged_in, only: [:create]

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save
      render "/projects/#{@project.user_id}"
    else
      render json: { base: ["Invalid data. Please try again."]}, status: 403
    end
  end

  def show
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    render "/projects/#{@project.id}"
  end

  def index
    @projects = Project.all
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy!
    render "api/projects"
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render "/projects/#{@project.id}"

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
