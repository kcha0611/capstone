class Api::ProjectsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def new
  end

  def create
    @project = Project.new(project_params)
    # @project.user_id = current_user.id
    if @project.save
      render "/api/projects/show"
    else
      render json: { base: ["Invalid data. Please try again."]}, status: 403
    end
  end

  def show
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    render "/api/projects/show"
  end

  def index
    @projects = Project.all
  end

  def destroy
    @project = Project.find(params[:id])
    if @project
      @project.destroy!
      render "/api/projects/show"
    else
      render json: {base: ["Invalid project"]}, status: 403
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render "/api/projects/show"
    else
      render json: {base: ["Invalid Project"]}, status: 403
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :image_url)
  end

end
