class RemoveTimeToPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :time, :datetime
  end
end
