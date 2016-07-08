class Api::StepsController < ApplicationController
  before_action :require_logged_in

  def create
    @step = Step.new(step_params)
    @step.order = @step.project.steps.length + 1
    if @step.save
      render "/api/steps/step"
    else
      render json: { base: ["Invalid data. Please try again."]}, status: 400
    end
  end

  def index
    if params[:project_id]
      @steps = Step.where({project_id: params[:project_id]})
    else
      @steps = Step.all
    end
  end
  private

  def step_params
    params.require(:step).permit(:title, :description, :project_id, :image_url)
  end
end
